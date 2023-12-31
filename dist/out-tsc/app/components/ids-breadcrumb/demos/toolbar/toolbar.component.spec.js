import { TestBed } from '@angular/core/testing';
import { ToolbarComponent } from './toolbar.component';
describe('ToolbarComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ToolbarComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ToolbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=toolbar.component.spec.js.map