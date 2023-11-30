import { TestBed } from '@angular/core/testing';
import { PrefixSuffixComponent } from './prefix-suffix.component';
describe('PrefixSuffixComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PrefixSuffixComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(PrefixSuffixComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=prefix-suffix.component.spec.js.map