import { TestBed } from '@angular/core/testing';
import { InfoComponent } from './info.component';
describe('InfoComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InfoComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(InfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=info.component.spec.js.map