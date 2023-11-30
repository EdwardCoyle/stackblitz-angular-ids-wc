import { TestBed } from '@angular/core/testing';
import { TruncatedComponent } from './truncated.component';
describe('TruncatedComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TruncatedComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(TruncatedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=truncated.component.spec.js.map